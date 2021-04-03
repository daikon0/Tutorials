//
//  ContentView.swift
//  MyJanken
//
//  Created by 濵田　大輝 on 2021/03/31.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        
        VStack {
            Image("gu")
                .resizable()
                .aspectRatio(contentMode: .fit)
            
            Text("グー")
            
            Button(action: {
                print("タップされたよ")
            }) {
                Text("じゃんけんをする")
            }
        }
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
