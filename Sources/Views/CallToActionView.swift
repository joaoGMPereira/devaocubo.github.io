import Foundation
import Ignite

struct CallToActionView: HTML {    
    let section, title, description, descriptionAction, link: String
    let language: ProjectLanguage
    
    init(section: String, title: String, description: String, descriptionAction: String, link: String, language: ProjectLanguage) {
        self.section = section
        self.title = title
        self.description = description
        self.descriptionAction = descriptionAction
        self.link = link
        self.language = language
    }
    
    var body: some HTML {
        Section(section) {
            Link(target: link) {
                Card {
                    VStack(alignment: .center) {
                        Text {
                            title
                        }
                        .font(.title3)
                        .horizontalAlignment(.center)
                        Spacer(size: 8)
                        Text{
                            description
                            Strong { descriptionAction }
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
            }
            .target(.newWindow)
        }
        .id(ProjectOption.callToAction.rawValue)
    }
}
