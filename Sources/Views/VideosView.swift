import Foundation
import Ignite

struct VideosView: HTML {
    let option: ProfileOption
    let language: ProjectLanguage
    let project: ProjectModel
    let groupedVideos: [[Video]]
    
    
    init(_ option: ProfileOption, for language: ProjectLanguage, project: ProjectModel) {
        self.option = option
        self.language = language
        self.project = project
        self.groupedVideos = stride(from: 0, to: project.normal.count, by: 6).map {
            Array(project.normal[$0..<min($0 + 6, project.normal.count)])
        }

    }
    
    var body: some HTML {
        Accordion {
            Item("Normais") {
                Grid(spacing: 2) {
                    ForEach(groupedVideos.enumerated()) { index, group in
                        Card(body: {
                            ForEach(group) { video in
                                Card {
                                    Embed(youTubeID: video.videoId, title: video.title)
                                        .aspectRatio(.r16x9)
                                }
                            }
                        }, header: {Text("Part \(index + 1)")}) 
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
                .columns(1)
            }
        }
        .openMode(.individual)
        .margin(.top, 160)
        .margin(.bottom, .xLarge)
    }
}
