import Foundation

struct ProjectModel: Decodable {
    let normal: [Video]
    let live: [Video]
    let upcoming: [Video]
    let links: [SocialLink]
    let footer: String
    
    enum CodingKeys: CodingKey {
        case normal
        case live
        case upcoming
        case links
        case footer
    }
    
    init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        self.normal = try container.decodeIfPresent([Video].self, forKey: .normal) ?? []
        self.live = try container.decodeIfPresent([Video].self, forKey: .live) ?? []
        self.upcoming = try container.decodeIfPresent([Video].self, forKey: .upcoming) ?? []
        self.links = try container.decodeIfPresent([SocialLink].self, forKey: .links) ?? []
        self.footer = try container.decodeIfPresent(String.self, forKey: .footer) ?? String()
    }
}

struct Video: Decodable {
    let videoId: String
    let title: String
    let url: String
    let publishedAt: String
}
