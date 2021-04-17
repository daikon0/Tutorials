//
//  ButtonImageView.swift
//  MyMusic
//
//  Created by 濵田　大輝 on 2021/04/17.
//

import SwiftUI

struct ButtonImageView: View {
    
    let imageName: String
    
    var body: some View {
        Image(imageName)
            .renderingMode(.original)
    }
}

struct ButtonImageView_Previews: PreviewProvider {
    static var previews: some View {
        ButtonImageView(imageName: "cymbal")
    }
}
