import Foundation
import Ignite

struct ProjectHTML: HTML {
    @Environment(\.decode) var decode
    
    let language: ProjectLanguage
    
    var project: ProjectModel? {
        decode.callAsFunction("videos.json", as: ProjectModel.self)
    }
   
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
            LinksView(
                links: project.links
            ).margin(.top, 160)
            FooterIgniteView(
                footer: project.footer
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
