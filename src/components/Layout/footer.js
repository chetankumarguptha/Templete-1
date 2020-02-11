import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-blue-700">
                    <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
                    <p className="text-white">
                        Created by{` `}
                        <a
                        className="font-bold no-underline text-white"
                        href="https://bryant.io"
                        >
                        Chetan
                        </a>
                    </p>

                    <p>
                        <a
                        className="font-bold no-underline text-white"
                        href=""
                        >
                        GitHub
                        </a>
                    </p>
                    </nav>
                </footer>
            </div>
        )
    }
}
