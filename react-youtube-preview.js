'use strict';

export var YouTubePreview = React.createClass({
	getInitialState: function () {
		return {
			showVideo: false
		};
	},
	getDefaultProps: function () {
		return {
			frameKey: 0
		};
	},
	render: function () {
		var mainStyle = {
			width: this.props.width,
			height: this.props.height,
			cursor: "pointer"
		};

		return (
			<div style={mainStyle} onClick={this.play}>
				{this.state.showVideo === false ? <YouTubeImage v={this.props.v} frameKey={this.props.frameKey}></YouTubeImage> : null}
				{this.state.showVideo === true ? <YouTubeEmbed v={this.props.v}></YouTubeEmbed> : null}
			</div>
		);
	},
	play: function () {
		this.setState({showVideo: true});
	}
});

var YouTubeImage = React.createClass({
	getPreviewURL: function () {
		return "http://img.youtube.com/vi/" + this.props.v + "/" + this.props.frameKey + ".jpg";
	},
	render: function () {
		return <img src={this.getPreviewURL()} alt="YouTube preview" />
	}
});

var YouTubeEmbed = React.createClass({
	getVideoURL: function () {
		return "http:////www.youtube.com/embed/" + this.props.v + "?rel=0&amp;autoplay=1";
	},
	render: function () {
		return (
			<iframe src={this.getVideoURL()} width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
		);
	}
});
