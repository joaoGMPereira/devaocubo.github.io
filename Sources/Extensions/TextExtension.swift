import Ignite

extension Text {
    init(option: OptionProtocol, for language: LanguageType, uppercased: Bool = false) {
        let description = option.iconWithDescription(for: language, uppercased: uppercased)
        self.init(description)
    }
}
