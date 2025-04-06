import Foundation
import Ignite

struct ComingView: HTML {
    let language: ProjectLanguage
    
    let section, title, description, id: String
    
    init(
        section: String,
        title: String,
        description: String,
        id: String,
        language: ProjectLanguage
    ) {
        self.section = section
        self.title = title
        self.description = description
        self.id = id
        self.language = language
    }
    
    var body: some HTML {
        Section(section) {
            Card {
                VStack(alignment: .center) {
                    Text {
                        title
                    }
                    .font(.title2)
                    .horizontalAlignment(.center)
                    Spacer(size: 8)
                    Text{
                        description
                    }
                    .font(.title4)
                    .horizontalAlignment(.center)
                }
            }
            .cardStyle(.bordered)
            .border(.accentColor, width: 2)
            .margin(.horizontal, .percent(5%))
            .margin(.bottom, 8)
        }
        .id(id)
    }
}
