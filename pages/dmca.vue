<template>
    <div class="container-fluid px-3 px-lg-5">
        <div class="mb-5">
            <h1 class="text-light">DMCA</h1>
        </div>
        <p class="text-muted"><b>This Site</b> is an online service provider as defined in the Digital Millennium Copyright Act. We do not provide users the ability to self-publish on <i>This Site</i> for the purpose of preventing unauthorized uploading of content which may infringe on 3rd parties intellectual property rights. &nbsp;All videos embedded on <i>This Site</i> are owned by Youtube and they are the respective owners of said content.&nbsp;</p>

        <p class="text-muted">We take copyright violation very seriously and will vigorously protect the rights of legal copyright owners. If you are the copyright owner of content which appears on the Watch This Free website and you did not authorize the use of the content you must notify us in writing in order for us to identify the allegedly infringing content and take action.</p>

        <p class="text-muted">In order to facilitate the process, we have provided an online form for your use. We will be unable to take any action if you do not provide us with the required information, so please fill out all fields accurately and completely. Alternatively, you may make a written notice via e-mail, facsimile or postal mail to our DMCA Agent as listed below. Your written notice must include the following: Specific identification of the copyrighted work which you are alleging to have been infringed. If you are alleging infringement of multiple copyrighted works with a single notification you must submit a representative list which specifically identifies each of the works that you allege are being infringed. Specific identification of the location and description of the material that is claimed to be infringing or to be the subject of infringing activity with enough detailed information to permit us to locate the material. You should include the specific URL or URLs of the web pages where the allegedly infringing material is located. Information reasonably sufficient to allow us to contact the complaining party which may include a name, address, telephone number and electronic mail address at which the complaining party may be contacted. A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent or the law. A statement that the information in the notification is accurate, and under penalty of perjury that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</p>

        <p class="text-muted">Please also note that under applicable law, 17 U.S.C. 512 (f), any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability.</p>
    </div>
</template>

<script>
export default {
  nuxtI18n: false,
  head() {
    return {
      titleTemplate: 'DMCA - %s',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'DMCA'
        }
      ]
    }
  },
}
</script>