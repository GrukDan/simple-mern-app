import React from 'react'

export const LinkCard = ({link}) => {
    return (


        <div className="row">
            <div className="col s12 m7 l6">
                <div className="card hoverable">
                    <div className="card-image">
                        <img
                            src="https://avatars.mds.yandex.net/get-pdb/231404/3557d7f6-ad7b-45e2-84fa-bae0dbe348f6/s1200?webp=false" alt="images"/>
                        <span className="card-title">Reset link</span>
                    </div>
                    <div className="card-content">
                        <p>
                            <strong> to: </strong>
                            <a href={link.to}
                               target="_blank"
                               rel="noopener noreferrer">
                                {link.to}
                            </a>
                        </p>
                        <p>
                            <strong> from: </strong>
                            <a href={link.from}
                               target="_blank"
                               rel="noopener noreferrer">
                                {link.from}
                            </a>

                        </p>
                        <p>
                            <strong> clicks on link: </strong>
                            <span> {link.clicks}</span>
                        </p>
                        <p>
                            <strong> date of creation: </strong>
                            <span> {new Date(link.date).toLocaleDateString()}</span>
                        </p>
                    </div>
                    <div className="card-action">
                        <a href={link.to}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="waves-effect waves-light btn">
                            Link
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
