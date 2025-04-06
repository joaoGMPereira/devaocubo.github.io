import Foundation

struct Profile: Decodable {
    let name, role, introduction: String
    let languages: [Language]
    let jobs: [Job]
    let education: [Experience]
    let projects: [PersonalProject]
}

struct Experience: Decodable {
    let title, role, place, interval: String
    let responsabilities, technologies: [String]
}

struct Job: Decodable {
    let title: String
    let positions: [JobPosition]
}

struct JobPosition: Decodable {
    let role, `where`, interval: String
    let responsabilities, technologies: [String]
}
struct PersonalProject: Decodable {
    let name, description: String
    let links: [SocialLink]
}

struct Language: Decodable {
    let language, level: String
}
