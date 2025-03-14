import Foundation

struct Profile: Decodable {
    let name, role, introduction, footer: String
    let languages: [Language]
    let jobs, education: [Experience]
    let projects: [PersonalProject]
    let links: [SocialLink]
}

struct Experience: Decodable {
    let title, role, place, interval: String
    let responsabilities, tecnologies: [String]
}

struct PersonalProject: Decodable {
    let name, description: String
    let links: [SocialLink]
}

struct Language: Decodable {
    let language, level: String
}

struct SocialLink: Decodable {
    let icon, description, link: String
}
