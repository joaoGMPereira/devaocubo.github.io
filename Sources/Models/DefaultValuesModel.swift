import Foundation

struct DefaultValuesModel: Decodable {
    let footer: String
    let links: [SocialLink]
}

struct SocialLink: Decodable {
    let icon, description, link: String
}
