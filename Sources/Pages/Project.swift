import Foundation
import Ignite

struct ProjectHTML: HTML {
    @Environment(\.decode) var decode
    
    let language: ProjectLanguage
    
    var portfolio: Profile? {
        decode.callAsFunction("\(language.rawValue).json", as: Profile.self)
    }
   
    var body: some HTML {
        if let portfolio {
            NavBarView(
                name: "/images/devaocubo.png",
                selectedPage: .init(
                    type: .project,
                    language: language
                ),
                options: ProjectOption.allCases
            )
            LinksView(
                links: portfolio.links
            ).margin(.top, 160)
            
            BottomBarView(
                selectedPage: .init(
                    type: .project,
                    language: language
                )
            )
        }
    }
    
    init(for language: ProjectLanguage = .portuguese) {
        self.language = language
    }
}


struct ProjectEn: StaticPage {
    let title: String = "João Gabriel"
    
    var body: some HTML {
        ProjectHTML(for: .english)
    }
}


struct Project: StaticPage {
    let title: String = "João Gabriel"
    
    var body: some HTML {
        return ProjectHTML()
    }
}
