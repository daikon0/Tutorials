//
//  SoundPlayer.swift
//  MyMusic
//
//  Created by 濵田　大輝 on 2021/04/17.
//

import UIKit
import AVFoundation

class SoundPlayer: NSObject {
    
    let cymbalData = NSDataAsset(name: "cymbalSound")!.data
    let guitarData = NSDataAsset(name: "guitarSound")!.data
    
    var cymbalPlayer: AVAudioPlayer!
    var guitarPlayer: AVAudioPlayer!
    
    
    func cymbalPlay() {
        do {
            cymbalPlayer = try AVAudioPlayer(data: cymbalData)
            
            cymbalPlayer.play()
        } catch {
            print("シンバルでエラーが発生しました")
        }

    }
    
    func guitarPlay() {
        do {
            self.guitarPlayer = try AVAudioPlayer(data: self.guitarData)
            
            self.guitarPlayer.play()
        } catch {
            print("ギターでエラーが発生しました")
        }

    }
    

}
