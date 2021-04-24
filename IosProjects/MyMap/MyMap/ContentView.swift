//
//  ContentView.swift
//  MyMap
//
//  Created by 濵田　大輝 on 2021/04/24.
//

import SwiftUI

struct ContentView: View {
    @State var inputText: String = ""
    @State var dispSearchKey: String = ""
    
    var body: some View {
        VStack {
            TextField("キーワードを入力してください",
                      text: $inputText , onCommit: {
                        dispSearchKey = inputText
                        print("入力したキーワード: " + dispSearchKey)
                      })
                      .padding()
            MapView(searchKey: dispSearchKey)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
