import Foundation
import Ignite

struct JobsView: HTML {
    let option: ProfileOption
    let language: PortfolioLanguage
    let jobs: [Job]
    
    init(_ option: ProfileOption, for language: PortfolioLanguage, jobs: [Job]) {
        self.option = option
        self.language = language
        self.jobs = jobs
    }
    
    var body: some HTML {
        TitleView(option, language: language)
        
        ForEach(jobs) { job in
            Table {
                Row {
                    Column {
                        Text(job.title)
                            .font(.title6)
                            .fontWeight(.bold)
                            .style(.color, .primary)
                        Text {
                            job.place.appending(" ")
                        }
                        .style(.color, .primary)
                        .margin(.none)
                        ForEach(job.positions) { position in
                            Card {
                                Text(position.role)
                                    .font(.title6)
                                    .fontWeight(.bold)
                                    .style(.color, .primary)
                                Emphasis(position.interval)
                                List { ForEach(position.responsabilities) { responsability in ListItem { "\(responsability)"} } }
                                    .style(.color, .primary)
                                    .margin(.bottom, .none)
                                Tecnologies(position.technologies)
                                    .style(.color, .primary)
                                    .margin(.vertical, -10)
                            }
                            .role(.dark)
                            .cardStyle(.solid)
                        }
                    }
                    .applyFirstStyle()
                }
            }
            .shadow(.accentColor, radius: 2)
        }
    }
}
