import Foundation
import Ignite

struct NavBarView: HTML {
    let name: String
    let selectedPage: SelectedPage
    let options: [OptionProtocol]
    
    init(name: String, selectedPage: SelectedPage, options: [OptionProtocol]) {
        self.name = name
        self.selectedPage = selectedPage
        self.options = options
    }
    var isURL: Bool {
        name.contains("/")
    }
    
    var body: some HTML {
        NavigationBar(logo: isURL ? logo : title) {
            for option in options {
                Link(target: option.idName) {
                    Text(option: option, for: selectedPage.language.type)
                        .style(.color, .primary)
                        .margin(.none)
                }
            }
            Link(target: selectedPage.language.staticPage) {
                Text(selectedPage.language.staticPageName)
                    .style(.color, .primary)
                    .margin(.none)
            }
            Link(target: selectedPage.language.page) {
                Text("\(selectedPage.language.flag) Version")
                    .style(.color, .primary)
                    .margin(.none)
            }
        }
        .width(.viewport)
        .navigationItemAlignment(.trailing)
        .navigationBarStyle(.dark)
        .background(.secondaryColor)
        .position(.fixedTop)
    }
    
    private var title: some InlineElement {
        Text(name)
            .font(.title4)
            .fontWeight(.bold)
            .style(.color, .primary)
            .margin(.none)
    }
    private var logo: some InlineElement {
        Image(name, description: "Logo")
            .resizable()
            .frame(width: .percent(30%))
    }
}
