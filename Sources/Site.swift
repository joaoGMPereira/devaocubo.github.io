import Foundation
import Ignite

@main
struct IgniteWebsite {
    static func main() async {
        var site = ExampleSite()

        do {
            try await site.publish()
        } catch {
            print(error.localizedDescription)
        }
    }
}

struct ExampleSite: Site {    
    var name = "Dev ao Cubo"
    var titleSuffix = " – Jobs"
    var url = URL(static: "https://www.project.com")
    var builtInIconsEnabled = true
    var favicon = URL(string: "/images/favicon.png")
    var feedConfiguration = FeedConfiguration(mode: .full, contentCount: 20, image: .init(url: "https://devaocubo.me/images/favicon.png", width: 32, height: 40))

    var author = "João Gabriel de Medeiros Pereira"

    var homePage = Project()
    var theme = MyTheme()
    var layout = MainLayout()
    
    var staticPages: [any StaticPage] = [
        ProjectEn(),
        Project(),
        PortfolioEn(),
        Portfolio()
    ]
}
