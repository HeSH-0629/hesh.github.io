import React from 'react';
import Header from './Header';
import useScrollFadeIn from './useScrollFadeIn';
import '../style/introduce.scss';
const Introduce = () => {
	const effect = useScrollFadeIn('down');
	return (
		<div class="introduce">
			<Header />
			<div {...effect}>
				<div class="big-text">배우는 사람</div>
				<div class="small-text">아직 갈길이 먼 3학기 휴학생입니다.</div>
				<div class="interest">
					<div style={{ margin: '0', textAlign: 'center', padding: '20px 0', fontSize: '30pt' }}>
						Interested in...
					</div>
					<ul style={{ width: 'auto', margin: '0 auto' }}>
						<li>
							Algorithm <small>(그 중에서도 그래프를 좋아합니다.)</small>
						</li>
						<li>
							AI with ML <small>(Computer Vision을 관심있게 공부중입니다)</small>
						</li>
						<li>
							Web develop{' '}
							<small>
								(<del>군대에서 할 수 있어서...</del>)
							</small>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Introduce;