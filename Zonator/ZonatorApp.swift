//
//  ZonatorApp.swift
//  Zonator
//
//  Created by Nikolay Raychev on 18/06/2023.
//

import SwiftUI

@main
struct ZonatorApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            MainView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
