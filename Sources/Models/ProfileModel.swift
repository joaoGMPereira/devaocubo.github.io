import Foundation

struct Profile: Decodable {
    let name, role, introduction, footer: String
    let languages: [Language]
    let jobs: [Job]
    let education: [Experience]
    let projects: [PersonalProject]
    let links: [SocialLink]
}

struct Experience: Decodable {
    let title, role, place, interval: String
    let responsabilities, technologies: [String]
}

struct Job: Decodable {
    let title, place: String
    let positions: [JobPosition]
}

struct JobPosition: Decodable {
    let role, interval: String
    let responsabilities, technologies: [String]
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
