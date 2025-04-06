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
                Link(target: "https://www.youtube.com/@DevAoCubo") {
                    Card {
                        VStack(alignment: .center) {
                            Text {
                                "Quer assistir a mais vídeos?!"
                            }
                            .font(.title3)
                            .horizontalAlignment(.center)
                            Spacer(size: 8)
                            Text{
                                "Tem muito mais no canal, "
                                Strong { "Clique aqui!" }
                            }
                            .font(.title5)
                            .horizontalAlignment(.center)
                            Spacer(size: 8)
                            Image("/images/devaocubo.png", description: "Logo")
                                .resizable()
                                .frame(width: .percent(30%))
                        }
                    }
                    .cardStyle(.solid)
                    .background(.secondaryColor)
                    .margin(.horizontal, .percent(5%))
                    .margin(.bottom, 8)
                    .margin(.top, 160)
                }
            Section("Vídeos Recentes") {
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
