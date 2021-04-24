//
//  MapView.swift
//  MyMap
//
//  Created by 濵田　大輝 on 2021/04/24.
//

import SwiftUI
import MapKit

struct MapView: UIViewRepresentable {
    
    let searchKey: String
    
    func makeUIView(context: Context) -> MKMapView {
        MKMapView()
    }
    
    func updateUIView(_ uiView: MKMapView, context: Context) {
        print(searchKey)
        
        let gecoder = CLGeocoder()
        
        gecoder.geocodeAddressString(
            searchKey,
            completionHandler: { (placemarks, error) in
                if let unwrapPlacemarks = placemarks ,
                   let firstPlacemarks = unwrapPlacemarks.first ,
                   let location = firstPlacemarks.location {
                    let targetCoordinate = location.coordinate
                    print(targetCoordinate)
                    let pin = MKPointAnnotation()
                    pin.coordinate = targetCoordinate
                    pin.title = searchKey
                    uiView.addAnnotation(pin)
                    uiView.region = MKCoordinateRegion(
                        center: targetCoordinate,
                        latitudinalMeters: 500.0,
                        longitudinalMeters: 500.0)
                }
                
                
            }
        )
    }
}

struct MapView_Previews: PreviewProvider {
    static var previews: some View {
        MapView(searchKey: "東京タワー")
    }
}
