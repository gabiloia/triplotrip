<template>
	<div class="page">
		<div class="page-header">
			<div class="title">Typography</div>
			<div class="links">
				<a
					href="https://www.naiveui.com/en-US/light/components/typography"
					target="_blank"
					alt="docs"
					rel="nofollow noopener noreferrer"
				>
					<Icon :name="ExternalIcon" :size="16" />
					docs
				</a>
			</div>
		</div>

		<div class="components-list">
			<CardCodeExample title="Tags">
				<template #description>Other naive-ui built-in tags.</template>
				<n-a href="https://en.wikipedia.org/wiki/Hear_the_Wind_Sing" target="_blank">Hear the Wind Sing</n-a>
				<n-h1>h1 tag</n-h1>
				<n-p>
					Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki
					Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary
					magazines in Japan), and in book form the next month. The novel was adapted by Japanese director
					Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred
					Birnbaum appeared in 1987.
				</n-p>
				<n-h2>h2 tag</n-h2>
				<n-p>
					Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki
					Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary
					magazines in Japan), and in book form the next month. The novel was adapted by Japanese director
					Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred
					Birnbaum appeared in 1987.
				</n-p>
				<n-h3>h3 tag</n-h3>
				<n-p>
					Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki
					Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary
					magazines in Japan), and in book form the next month. The novel was adapted by Japanese director
					Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred
					Birnbaum appeared in 1987.
				</n-p>
				<n-h4>h4 tag</n-h4>
				<n-p>
					Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki
					Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary
					magazines in Japan), and in book form the next month. The novel was adapted by Japanese director
					Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred
					Birnbaum appeared in 1987.
				</n-p>
				<n-h5>h5 tag</n-h5>
				<n-p>
					Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki
					Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary
					magazines in Japan), and in book form the next month. The novel was adapted by Japanese director
					Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred
					Birnbaum appeared in 1987.
				</n-p>
				<n-h6>h6 tag</n-h6>
				<n-p>
					Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki
					Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary
					magazines in Japan), and in book form the next month. The novel was adapted by Japanese director
					Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred
					Birnbaum appeared in 1987.
				</n-p>
				<n-ul>
					<n-li>li tag</n-li>
					<n-li>li tag</n-li>
					<n-li>li tag</n-li>
				</n-ul>
				<n-hr />
				<n-ol>
					<n-li>li tag</n-li>
					<n-li>li tag</n-li>
					<n-li>li tag</n-li>
				</n-ol>
				<n-ul align-text>
					<n-li>li tag</n-li>
					<n-li>li tag</n-li>
					<n-li>li tag</n-li>
				</n-ul>
				<n-hr />
				<n-ol align-text>
					<n-li>li tag</n-li>
					<n-li>li tag</n-li>
					<n-li>li tag</n-li>
				</n-ol>
				<n-blockquote>
					Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki
					Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary
					magazines in Japan), and in book form the next month. The novel was adapted by Japanese director
					Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred
					Birnbaum appeared in 1987.
				</n-blockquote>
				<n-blockquote align-text>
					Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki
					Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary
					magazines in Japan), and in book form the next month. The novel was adapted by Japanese director
					Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred
					Birnbaum appeared in 1987.
				</n-blockquote>
				<template #code="{ html }">
					{{ html(`
					<n-a href="https://en.wikipedia.org/wiki/Hear_the_Wind_Sing" target="_blank">
						Hear the Wind Sing
					</n-a>
					<n-h1>h1 tag</n-h1>
					<n-p>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h2>h2 tag</n-h2>
					<n-p>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h3>h3 tag</n-h3>
					<n-p>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h4>h4 tag</n-h4>
					<n-p>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h5>h5 tag</n-h5>
					<n-p>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h6>h6 tag</n-h6>
					<n-p>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-ul>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ul>
					<n-hr />
					<n-ol>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ol>
					<n-ul align-text>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ul>
					<n-hr />
					<n-ol align-text>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ol>
					<n-blockquote>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-blockquote>
					<n-blockquote align-text>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-blockquote>
					`) }}
				</template>
			</CardCodeExample>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Icon from "@/components/common/Icon.vue"
import { NA, NBlockquote, NH1, NH2, NH3, NH4, NH5, NH6, NHr, NLi, NOl, NP, NUl } from "naive-ui"

const ExternalIcon = "tabler:external-link"
</script>
