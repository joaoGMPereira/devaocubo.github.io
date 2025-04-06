import Foundation

struct ProjectModel: Decodable {
    let normal: [Video]
    let live: [Video]
    let upcoming: [Video]
    
    enum CodingKeys: CodingKey {
        case normal
        case live
        case upcoming
    }
    
    init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        self.normal = try container.decodeIfPresent([Video].self, forKey: .normal) ?? []
        self.live = try container.decodeIfPresent([Video].self, forKey: .live) ?? []
        self.upcoming = try container.decodeIfPresent([Video].self, forKey: .upcoming) ?? []
    }
}

struct Video: Decodable {
    let videoId: String
    let title: String
    let publishedAt: String
}
