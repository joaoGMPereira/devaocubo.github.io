import Foundation
import Ignite

struct TitleView: HTML {
    let option: OptionProtocol
    let language: PortfolioLanguage
    
    init(_ option: OptionProtocol, language: PortfolioLanguage) {
        self.option = option
        self.language = language
    }
    
    var body: some HTML {
        Text(option: option, for: language.type, uppercased: true)
            .font(.title2)
            .style(.color, .titleColor)
            .margin(.vertical)
            .id(option.idName)
    }
}
