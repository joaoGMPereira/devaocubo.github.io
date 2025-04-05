// swift-tools-version: 5.9
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "DevAoCubo",
    platforms: [.macOS(.v13)],
    dependencies: [
        .package(url: "https://github.com/twostraws/Ignite.git", revision: "3b067ec")
    ],
    targets: [
        .executableTarget(
            name: "DevAoCubo",
            dependencies: ["Ignite"]),
    ]
)
