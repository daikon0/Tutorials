//
//  ContentView.swift
//  MyMusic
//
//  Created by 濵田　大輝 on 2021/04/17.
//

import SwiftUI

struct ContentView: View {
    
    let soundPlayer = SoundPlayer()
    
    var body: some View {
        ZStack {
            Image("background")
                .resizable()
                .edgesIgnoringSafeArea(/*@START_MENU_TOKEN@*/.all/*@END_MENU_TOKEN@*/)
                .aspectRatio(contentMode: .fill)
            
            HStack {
                Button(action: {
                    soundPlayer.cymbalPlay()
                }, label: {
                    ButtonImageView(imageName: "cymbal")
                })
                
                Button(action: {
                    soundPlayer.guitarPlay()
                }, label: {
                    ButtonImageView(imageName: "guitar")
                })
            }
        }
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
