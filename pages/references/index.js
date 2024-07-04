import References from '../../components/References';
import guitar from '../../config/guitar';

export const getStaticProps = async (context) => {
    const elements = guitar.notes.sharps.flatMap((key) => {
        const chords = Object.keys(guitar.arppegios).flatMap((chordKey) => {
            return [
                ...guitar.shapes.names.map((shape) => {
                    const title = `Chord: ${guitar.arppegios[chordKey].name} in ${key} (Shape: ${shape})`;
                    return {
                        label: title,
                        href: `/references/chords/${encodeURIComponent(key)}/${chordKey.replace('#', '%23')}/${shape}`,
                    };
                })
            ];
        });

        const arpeggios = Object.keys(guitar.arppegios).flatMap((arppegioKey) => {
            const title = `Arpeggio: ${guitar.arppegios[arppegioKey].name} in ${key}`;
            return [
                {
                    label: title,
                    href: `/references/arppegios/${encodeURIComponent(key)}/${arppegioKey.replace('#', '%23')}`,
                },
                ...guitar.shapes.names.map((shape) => {
                    const title = `Arpeggio: ${guitar.arppegios[arppegioKey].name} in ${key} (Shape: ${shape})`;
                    return {
                        title: title,
                        label: `Arpeggio: ${guitar.arppegios[arppegioKey].name} in ${key} (Shape: ${shape})`,
                        href: `/references/arppegios/${encodeURIComponent(key)}/${arppegioKey.replace('#', '%23')}/${shape}/`,
                    };
                }),
            ];
        });

        const scales = Object.keys(guitar.scales).flatMap((scaleKey) => {
            if (guitar.scales[scaleKey].isModal === true) {
                return [
                    ...guitar.scales[scaleKey].modes.map((mode) => {
                        const title = `Scale: ${guitar.scales[scaleKey].name} in ${key} (Mode: ${mode.name})`;
                        return {
                            label: title,
                            href: `/references/scales/${encodeURIComponent(key)}/${scaleKey}/modal/${decodeURIComponent(mode.name.toLowerCase().replace(' ', '-')).replace('#', '%23')}`,
                        };
                    }),
                    ...guitar.scales[scaleKey].modes.flatMap((mode) => {
                        return guitar.shapes.names.map((shape) => {
                            const title = `Scale: ${guitar.scales[scaleKey].name} in ${key} (Mode: ${mode.name}, Shape: ${shape})`;
                            return {
                                label: title,
                                href: `/references/scales/${encodeURIComponent(key)}/${scaleKey}/modal/${decodeURIComponent(mode.name.toLowerCase().replace(' ', '-')).replace('#', '%23')}/${shape}`,
                            };
                        });
                    }),
                ];
            } else {
                const title = `Scale: ${guitar.scales[scaleKey].name} in ${key} (Single)`;
                return [
                    {
                        label: title,
                        href: `/references/scales/${encodeURIComponent(key)}/${scaleKey}/single`,
                    },
                    ...guitar.shapes.names.map((shape) => {
                        const title = `Scale: ${guitar.scales[scaleKey].name} in ${key} (Single, Shape: ${shape})`;
                        return {
                            label: title,
                            href: `/references/scales/${encodeURIComponent(key)}/${scaleKey}/single/${shape}`,
                        };
                    }),
                ];
            }
        });

        return [...chords, ...arpeggios, ...scales];
    });

    return {
        props: {
            elements,
        },
    };
};

export default References;
