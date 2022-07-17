import React from "react";
import { Link } from "react-router-dom";
import "./Poster.scss"

export enum PosterStatus {
    notowned,
    owned,
    onsale
}

export type PosterProps = {
    productUrl: string
    productTitle: string
    posterImageUrl: string
    isLazyLoading: boolean
    width: number
    status: PosterStatus
}

export const defaultProps: PosterProps = {
    productUrl: "products/Outlaw",
    productTitle: "Outlaw",
    posterImageUrl: "https://cdn.shopify.com/s/files/1/2316/3287/products/OUTLAW_WEB_POSTER_480x.png?v=1654553994",
    isLazyLoading: true,
    width: 300,
    status: PosterStatus.notowned
}

const PosterLabel = (status: PosterStatus) => {
    switch (status) {
        case PosterStatus.owned:
            return <div className="poster__label"><div className="owned__label"> Owned </div> </div>
        case PosterStatus.onsale:
            return <div className="poster__label"><div className="onsale__label"> On Sale </div> </div>
        case PosterStatus.notowned:
            return ;
    }
}

const Poster = ({productUrl, productTitle, posterImageUrl, isLazyLoading, width, status} : PosterProps  = defaultProps) => {
    return (
        <div className="poster__component" style={{width}}>
            <Link to={productUrl} aria-label={productTitle}>
                <img
                    src={posterImageUrl}
                    width="100%"
                    loading={isLazyLoading ? "lazy": "eager"}
                    alt={productTitle} />
            </Link>
            {PosterLabel(status)}
        </div>
    )
}

export default Poster;