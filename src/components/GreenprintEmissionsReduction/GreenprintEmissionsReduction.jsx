import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie } from 'recharts';
import { Segment, Header, Grid, Column } from 'semantic-ui-react';
import { ResponsivePie } from '@nivo/pie';
import GreenprintEmissionsReductionLanguaje from './GreenprintEmissionsReductionLanguaje';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import './style.scss';

class GreenprintEmissionsReduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedLanguage: this.props.selectedLanguage
    };
    this.formatData = this.formatData.bind(this);
  }

  componentDidMount() {
    this.formatData();
  }

  formatData() {
    let data = this.props.data.map(item => {
      return { ...item, label: item.name, id: item.name }
    });
    this.setState({ data: data });
  }

  render() {
    return (
      <div className='GreenprintEmissionsReduction'>
        {
          this.props.showLanguageDropdown &&
          <Segment attached className='GreenprintEmissionsReduction_Segment Segment_Header'>
            <Grid>
              <Grid.Column floated='right' width={4}>
                <LanguageSwitcher
                  className='GreenprintEmissionsReduction__LanguageSwitcher'
                  floated='right'
                  onLanguageChange={(language) => {
                    this.setState({ selectedLanguage: language });
                  }}
                />
              </Grid.Column>
            </Grid>
          </Segment>
        }
        <Segment attached className='GreenprintEmissionsReduction_Segment'>
          <div>
            <div>
              <Header textAlign='center' className='GreenprintEmissionsReduction_Segment_Header' as='h2'>
                {GreenprintEmissionsReductionLanguaje[this.state.selectedLanguage].grafTittle}
              </Header>
            </div>
            <div>
              <Header textAlign='center' className="GreenprintEmissionsReduction_Segment_Header" as='h5'>
                {GreenprintEmissionsReductionLanguaje[this.state.selectedLanguage].grafSubTittle}
              </Header>
            </div>
            <div>
              <Header textAlign='center' className="GreenprintEmissionsReduction_Segment_Header" as='h5'>
                {GreenprintEmissionsReductionLanguaje[this.state.selectedLanguage].grafDetail}
              </Header>
            </div>
          </div>
          <div className="GreenprintEmissionsReduction_Chart">
            <ResponsivePie
              data={this.state.data}
              margin={{
                "top": 40,
                "right": 80,
                "bottom": 80,
                "left": 80
              }}
              padAngle={0.7}
              cornerRadius={0}
              colors="accent"
              colorBy="id"
              borderColor="inherit:darker(0.6)"
              radialLabelsSkipAngle={0}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={20}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor="inherit"
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
              animate="true"
              motionStiffness={90}
              motionDamping={15}
              legends={[]}
            />
          </div>
        </Segment>
        <Segment attached inverted color='grey'>
          <p>
            {GreenprintEmissionsReductionLanguaje[this.state.selectedLanguage].grafSummary1}
          </p>
          <p>
            {GreenprintEmissionsReductionLanguaje[this.state.selectedLanguage].grafSummary2}
          </p>
        </Segment>
      </div>
    );
  }
}

GreenprintEmissionsReduction.propTypes = {
  data: PropTypes.array,
  showLanguageDropdown: PropTypes.bool,
  selectedLanguage: PropTypes.string
};

GreenprintEmissionsReduction.defaultProps = {
  data: [],
  showLanguageDropdown: true,
  selectedLanguage: "en"
}

export default GreenprintEmissionsReduction;
