import Foundation
import Ignite

struct VideosView: HTML {
    @Environment(\.decode) var decode
    
    let language: ProjectLanguage
    let project: ProjectModel
    
    var translate: TranslateProjectModel? {
        decode.callAsFunction("\(language.rawValue).json", as: TranslateProjectModel.self)
    }
    
    init(for language: ProjectLanguage, project: ProjectModel) {
        self.language = language
        self.project = project
    }
    
    var body: some HTML {
        if let translate {
            Accordion {
                Item(translate.videos.videos, startsOpen: true) {
                    Grid(spacing: 2) {
                        ForEach(project.normal) { video in
                            Card {
                                Embed(youTubeID: video.videoId, title: video.title)
                                    .aspectRatio(.r16x9)
                            }
                        }
                    }
                    .columns(2)
                }
                
                Item(translate.videos.lives) {
                    Grid(spacing: 2) {
                        ForEach(project.live) { video in
                            Card {
                                Embed(youTubeID: video.videoId, title: video.title)
                                    .aspectRatio(.r16x9)
                            }
                        }
                    }
                    .columns(2)
                }
            }
            .openMode(.individual)
            .margin(.bottom, .xLarge)
        }
    }
}
