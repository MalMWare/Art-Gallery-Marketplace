// Schema
const artworkSchema = new Schema({
  title: { type: String, required: true },
  pic: { type: String, required: true },
  artist: { type: Schema.Types.ObjectId,
    required: true,
    ref: 'Artist'
  },
  description:{ type: String, required: true },
  price: { type: Number, required: true },
  year: Date,
  style: String,
  size: { type: String, required: true },
  sold: Boolean,
  copies: Number,
  })

// Helper Methods
artworkSchema.methods.getArtworkBy = function (this:any) {
  return `This ${this.title} was created by ${this.artist?.name}!`
};

// model
const Artwork = mongoose.model('Artwork', artworkSchema)
module.exports = Artwork;
