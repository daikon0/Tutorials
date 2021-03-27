//
//  ContentView.swift
//  MyFirst
//
//  Created by 濵田　大輝 on 2021/03/27.
//

import SwiftUI

struct ContentView: View {
    
    @State var outputText = "Hello, world!"
    
    var body: some View {
        
        VStack {
            Text(outputText)
                .padding()
                .font(.largeTitle)
            
            Button(action: {
                outputText = "Hi, Swift!"
                print("debug!")
                print(outputText)
            }) {
                Text("change text")
                    .foregroundColor(Color.white)
                    .padding(.all)
                    .background(/*@START_MENU_TOKEN@*//*@PLACEHOLDER=View@*/Color.blue/*@END_MENU_TOKEN@*/)
            }
            
        }
        

    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .previewDevice("iPhone 8")
    }
}
