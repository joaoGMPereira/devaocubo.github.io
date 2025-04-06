
enum ProjectOption: String, CaseIterable, CustomStringConvertible, OptionProtocol {
    case callToAction
    case code
    case videos
    case contact
    
    var idName: String {
        "#\(rawValue)"
    }
    
    var icon: String {
        switch self {
        case .callToAction: "📺"
        case .videos: "📹"
        case .code: "💻"
        case .contact: "👥"
        }
    }
    
    var description: String {
        description(for: .english)
    }
    
    func description(for language: LanguageType) -> String {
        switch (self, language) {
        case (.videos, .english): "Videos"
        case (.videos, .portuguese): "Vídeos"
        case (.code, .english): "Code"
        case (.code, .portuguese): "Código"
        case (.callToAction, .english): "YouTube"
        case (.callToAction, .portuguese): "YouTube"
        case (.contact, .english): "Medias"
        case (.contact, .portuguese): "Redes"
        }
    }
    
    /// Combines the icon and the raw value description.
    /// - Parameters:
    ///   - language: The language in which the description is desired.
    ///   - uppercased: A boolean that determines whether the raw value should be uppercased. Default is `false`.
    /// - Returns: A string with the icon and the corresponding description, optionally in uppercase.
    func iconWithDescription(for language: LanguageType, uppercased: Bool = false) -> String {
        let description = self.description(for: language)
        return "\(icon) \(uppercased ? description.uppercased() : description)"
    }
}
