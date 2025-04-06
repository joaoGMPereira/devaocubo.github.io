import Foundation
import Ignite

struct ProjectHTML: HTML {
    @Environment(\.decode) var decode
    
    let language: ProjectLanguage
    
    var project: ProjectModel?
   
    var body: some HTML {
        if let project {
            NavBarView(
                name: "/images/devaocubo.png",
                selectedPage: .init(
                    type: .project,
                    language: language
                ),
                options: ProjectOption.allCases
            )
            VideosView(
                .project,
                for: language,
                project: project
            )
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
        self.project = nil
        self.project = decode.callAsFunction("videos.json", as: ProjectModel.self)
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
        ProjectHTML()
    }
}
