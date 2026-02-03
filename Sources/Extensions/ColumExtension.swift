import Foundation
import Ignite

extension Column {
    func applyFirstStyle() -> some HTML {
        self.style(.backgroundColor, .secondaryColor)
            .style(.borderColor, .accentColor)
            .padding()
    }

    func applySecondStyle() -> some HTML {
        self.style(.backgroundColor, .backgroundColor)
            .style(.borderColor, .accentColor)
            .padding()
    }
    
    func applyThirdStyle() -> some HTML {
        self.style(.backgroundColor, .secondaryColor)
            .style(.borderBottomWidth, "0")
            .padding()
    }
}
