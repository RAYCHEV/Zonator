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
    @State private var warning = ""
    @FocusState private var focusedField: Fields?
    
    var body: some View {
        VStack{
            if(warning != ""){
                Text("\(warning)")
            }
            if(totalTitle != ""){
                Text("\(totalTitle)")
            }
        Grid(alignment: .leading, horizontalSpacing: 10, verticalSpacing: 10) {
            GridRow(alignment: .firstTextBaseline) {
                Label("Proteins", systemImage: "p.square.fill")
                TextField("0.0", text: $protein)
                    .focused($focusedField, equals: .proteins)
                    .modifier(FloatInputModifier())
                Text("gr. per 100gr.")
            }
            
            GridRow(alignment: .firstTextBaseline) {
                Label("Carbs", systemImage: "c.square.fill")
                TextField("0.0", text: $carbs)
                    .focused($focusedField, equals: .carbs)
                    .modifier(FloatInputModifier())
                Text("gr. per 100gr.")
            }
            
            GridRow(alignment: .firstTextBaseline) {
                Label("Fats", systemImage: "f.square.fill")
                TextField("0.0", text: $fats)
                    .focused($focusedField, equals: .fats)
                    .modifier(FloatInputModifier())
                Text("gr. per 100gr.")
            }
            
            GridRow(alignment: .firstTextBaseline) {
                Label("Fibres", systemImage: "f.cursive.circle")
                TextField("0.0", text: $fibers)
                    .focused($focusedField, equals: .fibres)
                    .modifier(FloatInputModifier())
                Text("gr. per 100gr.")
            }
            GridRow() {
                Button("Clear"){
                    clearValues()
                    self.warning = ""
                }
                Button("Next"){
                    nextFocus()
                }
                Button("Submit"){
                    self.totalTitle = calculation()
                    
                }
            }.buttonStyle(.bordered)
        }
        .onAppear{
            focusedField = .proteins
        }
        .padding()
        .onTapGesture {
            UIApplication.shared.sendAction(#selector(UIResponder.resignFirstResponder), to: nil, from: nil, for: nil)
        }
        
        
        }
    }
    
    private func nextFocus() {
        switch focusedField {
        case .none:
            focusedField = .proteins
        case .proteins:
            focusedField = .carbs
        case .carbs:
            focusedField = .fats
        case .fats:
            focusedField = .fibres
        case .fibres:
            focusedField = .proteins
        }
    }
    
    private func calculation() -> String {
        //*per100 in grams
        var protPer100 =    100.0/(Float(self.protein)  ?? 0)
        var carbPer100 =    100.0/(Float(self.carbs)    ?? 0)
        var fatPer100 =     100.0/(Float(self.fats)     ?? 0)
        let fibrePer100 =   100.0/(Float(self.fibers)   ?? 0)
//
//                    if protPer100.isInfinite {protPer100 = 0}
//                    if carbPer100.isInfinite {carbPer100 = 0}
//                    if fatPer100.isInfinite {fatPer100 = 0}
//                    if fibrePer100.isInfinite {fibrePer100 = 0}
        
        //*per100 grams for block
        
        
        protPer100 *= 7
        carbPer100 = (carbPer100-fibrePer100)*9
        fatPer100 *= 1.5
               
        
//        if protPer100 < carbPer100 {
//            if protPer100 < fatPer100{
//                //prot
//                return "PROTEINS\n\n \(protPer100) gr. per block"
//            } else {
//                //fat
//                return "FATS\n\n \(fatPer100) gr. per block"
//            }
//        } else if carbPer100 < fatPer100 {
//            if carbPer100 < protPer100 {
//                // carb
//                return "CARBS\n\n \(carbPer100) gr. per block"
//            }
//        }
        self.totalTitle += ("Proteins: \(protPer100) for block.\nCarbs: \(carbPer100) for block.\nFats \(fatPer100) for block")
        return totalTitle
    }
    
    private func clearValues() {
        protein = ""
        carbs = ""
        fats = ""
        fibers = ""
        totalTitle = ""
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
            .frame(width: 56)
            .keyboardType(.decimalPad)
            .textFieldStyle(RoundedBorderTextFieldStyle())
            .fixedSize(horizontal: true, vertical: false)
    }
}
