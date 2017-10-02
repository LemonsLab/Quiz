import React from 'react';
import {
    Image,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import styles from '../../style/Answer.js';

const imagesPNG = {
                    arrowDown : require('../images/arrowDown.png'),
                    arrowUp   : require('../images/arrowUp.png')
                  };

class Answer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        expanded        :     false,
        linesNumber     :     1,
        currentImage    :     imagesPNG.arrowDown,
    };
  }

  changeImage(){
      this.setState({
          expanded      :     !this.state.expanded
      });

      let linesNumber   =     this.state.expanded? 1 : 100,
          currentImage  =     this.state.expanded? imagesPNG.arrowDown : imagesPNG.arrowUp;

      this.setState({
          linesNumber   :     linesNumber,
          currentImage  :     currentImage
      });
  }

    render(){
        let panelColor  = this.props.checked? styles.containerChecked : styles.containerUnchecked;

        return(
          <View style={panelColor}>
              <TouchableWithoutFeedback onPress={this.props.onPress}>
                  <View style={styles.row}>
                      <View style={styles.textFrame}>
                          <Text
                              numberOfLines  =  { this.state.linesNumber }
                              style          =  { styles.text            }
                          >
                                                { this.props.textAnswer  }
                          </Text>
                      </View>
                      <TouchableWithoutFeedback onPress={this.changeImage.bind(this)}>
                          <Image
                              source        =   { this.state.currentImage }
                              style         =   { styles.image            }
                          />
                      </TouchableWithoutFeedback>
                  </View>
              </TouchableWithoutFeedback>
          </View>
        )
    }
}
export default Answer;


