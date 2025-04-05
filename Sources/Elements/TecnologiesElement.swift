import Foundation
import Ignite

@MainActor
func Tecnologies(_ tecnologies: [String]) -> some HTML {
    Text {
        ForEach(tecnologies) {
            Badge($0)
                .role(.close)
                .style(.backgroundColor, .accent)
                .style(.color, .inverse)
                .padding(.medium)
                .margin(.small)
        }
    }
}
