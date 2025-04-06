import Foundation
import Ignite

struct VideosView: HTML {
    let option: ProfileOption
    let language: ProjectLanguage
    let project: ProjectModel
    
    init(_ option: ProfileOption, for language: ProjectLanguage, project: ProjectModel) {
        self.option = option
        self.language = language
        self.project = project
    }
    
    var body: some HTML {
        Accordion {
            Item("Normais") {
                Grid(spacing: 2) {
                    ForEach(project.normal) { video in
                        Card {
                            Embed(youTubeID: video.videoId, title: video.title)
                                .aspectRatio(.r16x9)
                        }
                    }
                }
                .columns(3)
            }

            Item("Ao Vivo") {
                Grid(spacing: 2) {
                    ForEach(project.live) { video in
                        Card {
                            Embed(youTubeID: video.videoId, title: video.title)
                                .aspectRatio(.r16x9)
                        }
                    }
                }
                .columns(3)
            }
        }
        .openMode(.individual)
        .margin(.top, 160)
        .margin(.bottom, .xLarge)
    }
}
