import Song from "./Song";
const Songs = ({ songs, userSearchText }) => {

    return (
        <div className="songs">
            {songs.filter((item) => item.name.toLowerCase().includes(userSearchText.toLowerCase())).map((song, index) =>
                <Song
                    key={song.name}
                    index={++index}
                    song={song}
                />
            )}
        </div>
    )
}

export default Songs