//
//  MainVIew.swift
//  Zonator
//
//  Created by Nikolay Raychev on 18/06/2023.
//

import SwiftUI
import CoreData

struct MainView: View {
    
    enum Fields {
        case proteins
        case carbs
        case fats
        case fibres
    }
    
    @State private var protein = ""
    @State private var carbs = ""
    @State private var fats = ""
    @State private var fibers = ""
    @State private var totalTitle = ""
    @FocusState private var focusedField: Fields?
    
    var body: some View {
        VStack{
            if(totalTitle != ""){
                Text("\(totalTitle)")
            }
        Grid(alignment: .leading, horizontalSpacing: 10, verticalSpacing: 10) {
            GridRow(alignment: .firstTextBaseline) {
                Label("Proteins", systemImage: "p.square.fill")
                TextField("0.0", text: $protein)
                    .focused($focusedField, equals: .proteins)
            }
            
            GridRow(alignment: .firstTextBaseline) {
                Label("Carbs", systemImage: "c.square.fill")
                TextField("0.0", text: $carbs)
                    .focused($focusedField, equals: .carbs)
            }
            
            GridRow(alignment: .firstTextBaseline) {
                Label("Fats", systemImage: "f.square.fill")
                TextField("0.0", text: $fats)
                    .focused($focusedField, equals: .fats)
            }
            
            GridRow(alignment: .firstTextBaseline) {
                Label("Fibres", systemImage: "f.cursive.circle")
                TextField("0.0", text: $fibers)
                    .focused($focusedField, equals: .fibres)
            }
            GridRow() {
                Text("")
                Button("Next"){
                    
                }
                Button("Submit"){
                    var protPer100 = 100.0/(Float(self.protein) ?? 0)
                    var carbPer100 = 100.0/(Float(self.carbs) ?? 0)
                    var fatPer100 = 100.0/(Float(self.fats) ?? 0)
                    var fibrePer100 = 100.0/(Float(self.fibers) ?? 0)
                    
                    if protPer100.isInfinite {protPer100 = 0}
                    if carbPer100.isInfinite {carbPer100 = 0}
                    if fatPer100.isInfinite {fatPer100 = 0}
                    if fibrePer100.isInfinite {fibrePer100 = 0}
                    
                    self.totalTitle = ("Proteins:\(protPer100*7) for block.\nCarbs:\((carbPer100-fibrePer100)*9) for block.\nFats\(fatPer100*1.5) for block")
                    
                }
            }.buttonStyle(.bordered)
        }
        .padding()
        .modifier(FloatInputModifier())
        .onTapGesture {
            UIApplication.shared.sendAction(#selector(UIResponder.resignFirstResponder), to: nil, from: nil, for: nil)
        }}
    }
}

struct MainView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView().environment(\.managedObjectContext, PersistenceController.preview.container.viewContext)
    }
}


struct FloatInputModifier: ViewModifier {
    func body(content: Content) -> some View {
        content
            .keyboardType(.decimalPad)
            .textFieldStyle(RoundedBorderTextFieldStyle())
    }
}
