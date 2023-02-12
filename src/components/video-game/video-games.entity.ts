import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { VideoGameAsset } from '../video-games-assets/video-games-assets.entity';

// see https://www.esrb.org/ratings-guide/
export enum videoGamesClassification { 
    EVERYONE = "everyone",
    EVERYONE_10 = "everyone_10",
    TEEN = "teen",
    MATURE = "mature",
    AUDULT = "audult",
    RP = "rating_peding",
    RP_17 = "rating_peding_17",
}

@Entity({name: 'video_games'})
export class VideoGame {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column({
        type: "enum",
        enum: videoGamesClassification,
        default: videoGamesClassification.RP,
    })
    classification: string

    @Column()
    sale_price: number

    @Column()
    book_price: number

    @Column()
    discount_percentage: number

    @Column()
    release_date: Date

    @Column()
    quantity: number

    @OneToMany(() => VideoGameAsset, (asset) => asset.videoGame)
    assets: VideoGameAsset[]
}
