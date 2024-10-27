type    Mods = Record<string, boolean | string>

const obj:Mods = {
    'hovered': ""
}

export function classNames(cls: string, mods: Mods , additional: string[]):string {
    return [ cls, 
        ...additional ,
        ...Object.entries(mods)
            .filter(([cls, value])=>Boolean(value)).map(([className])=>className)
    ]
        .join(' ')
}

classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])

