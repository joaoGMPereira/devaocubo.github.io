struct TranslateProjectModel: Decodable {
    let callToAction: CallToAction
    let code: Code
    let videos: Videos
}

struct CallToAction: Decodable {
    let title: String
    let description: String
    let descriptionAction: String
}

struct Code: Decodable {
    let section: String
    let title: String
    let description: String
}

struct Videos: Decodable {
    let title: String
    let videos: String
    let lives: String
}
