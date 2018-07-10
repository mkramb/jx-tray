import * as React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { PipelineStore } from '../../stores';
import { Page } from '../layout';

const Pipeline = styled.a`
    padding: ${props => props.theme.spacing.min * 2 + 'px'};
    font-size: 12px;
`;

export interface PipelinesListProps {
    pipelineStore?: PipelineStore;
}

@inject('pipelineStore')
@observer
export class PipelinesList extends React.Component<PipelinesListProps> {
    componentDidMount() {
        this.props.pipelineStore!.init();
    }

    componentWillUnmount() {
        this.props.pipelineStore!.clear();
    }

    render() {
        if (!this.props.pipelineStore!.pipelines) {
            return null;
        }

        return (
            <Page title="pipelines">
                {this.props.pipelineStore!.pipelines!.map(pipeline => (
                    <Pipeline key={pipeline.key}>{pipeline.name}</Pipeline>
                ))}
            </Page>
        );
    }
}
