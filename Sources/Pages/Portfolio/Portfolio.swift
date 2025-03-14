import Foundation
import Ignite

struct PortfolioHTML: HTML {
    @Environment(\.decode) var decode
    
    let language: PortfolioLanguage
    
    var portfolio: Profile? {
        decode.callAsFunction("\(language.rawValue).json", as: Profile.self)
    }
   
    var body: some HTML {
        if let portfolio {
            NavBarView(name: portfolio.name, selectedPage: .init(type: .portfolio, language: language), options: ProfileOption.allCases)
            IntroductionView(role: portfolio.role, introduction: portfolio.introduction)
            ExperienceView(.job, for: language, experiences: portfolio.jobs)
            ExperienceView(.education, for: language, experiences: portfolio.education)
            ProjectView(.project, for: language, projects: portfolio.projects)
            FooterView(links: portfolio.links)
            FooterIgniteView(footer: portfolio.footer)
        }
    }
    
    init(for language: PortfolioLanguage = .portuguese) {
        self.language = language
    }
}

struct PortfolioEn: StaticPage {
    let title: String = "João Gabriel"
    
    var body: some HTML {
        PortfolioHTML(for: .english)
    }
}

struct Portfolio: StaticPage {
    let title: String = "João Gabriel"
    
    var body: some HTML {
        PortfolioHTML()
    }
}
