import Foundation
import Ignite

@MainActor
func Tecnologies(_ tecnologies: [String]) -> some HTML {
    Text {
        ForEach(tecnologies) { tecnology in
            Badge(tecnology)
                .role(.close)
                .style(.backgroundColor, .accent)
                .style(.color, .inverse)
                .padding(.medium)
                .margin(.small)
        }
    }
}
