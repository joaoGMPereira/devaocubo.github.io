import Foundation
import Ignite

struct MainLayout: Layout {
    @Environment(\.decode) var decode
    var defaultValues: DefaultValuesModel? {
        decode.callAsFunction("defaultValues.json", as: DefaultValuesModel.self)
    }
    
    var body: some HTML {
        Body {
            content

            if let defaultValues {
                Section {
                    LinksView(
                        links: defaultValues.links
                    )
                    .margin(
                        .top,
                        160
                    )
                    FooterIgniteView(
                        footer: defaultValues.footer
                    )
                    .margin(
                        .bottom,
                        80
                    )
                }
            }
        }
    }
}
