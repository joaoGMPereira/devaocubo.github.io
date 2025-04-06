import Foundation
import Ignite

struct ProjectHTML: HTML {
    @Environment(\.decode) var decode
    
    let language: ProjectLanguage
    
    var project: ProjectModel?
    var translate: TranslateProjectModel? {
        decode.callAsFunction("\(language.rawValue).json", as: TranslateProjectModel.self)
    }
    
    var body: some HTML {
        if let project, let translate {
            NavBarView(
                name: "/images/devaocubo.png",
                selectedPage: .init(
                    type: .project,
                    language: language
                ),
                options: ProjectOption.allCases
            )
            CallToActionView(
                section: "YouTube",
                title: translate.callToAction.title,
                description: translate.callToAction.description,
                descriptionAction: translate.callToAction.descriptionAction,
                link: "https://www.youtube.com/@DevAoCubo",
                language: language
            )
            .margin(.top, 160)
            ComingView(
                section: translate.code.section,
                title: translate.code.title,
                description: translate.code.description,
                id: ProjectOption.code.rawValue,
                language: language
            )
            Section(translate.videos.title) {
                VideosView(
                    for: language,
                    project: project
                )
            }
            .id(ProjectOption.videos.rawValue)
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
